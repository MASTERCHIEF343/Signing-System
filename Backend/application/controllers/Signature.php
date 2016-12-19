<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
header('P3P: CP="CAO PSA OUR"'); // Makes IE to support cookies
header("Content-Type: application/json; charset=utf-8");

class Signature extends CI_Controller {
	public function __construct(){
		parent::__construct();
		$this->load->model('sign_Model');
		//load CI-php's date func
		$this->load->helper('date');
		//set Timezone
		date_default_timezone_set("Asia/Shanghai");
	}	

	//ngInit
	public function checksign(){
		$params = json_decode($this->input->raw_input_stream);
		$userid = $params->data->userid;
		$signstatus = $this->sign_Model->checkSignStatus($userid);
		$this->output->set_content_type('application/json')->set_output(json_encode(array('signstatus' => $signstatus)));
	}

	public function dateTimer(){
		$params = json_decode($this->input->raw_input_stream);
		$userid = $params->data->userid;
		$data = array(
			"signstatus" => 1,
			"lastsign" => $params->data->signtime
		);
		//transfrom singtime
		$lastsign = $data["lastsign"];
		$lastsign = preg_replace('/([\x80-\xff]*)/i','',$lastsign);
		$data["lastsign"] = $lastsign;
		//checksignstatus
		$signstatus = $this->sign_Model->checkSignStatus($userid);
		//get id where userid = $data["userid"]
		$id = $this->sign_Model->getId($userid);
		//when haven't sign
		if($signstatus == 0){
			//insert into registration
			$this->db->set($data);
			$this->db->where('id', $id);
			$this->db->update('registration');
			//insert into logs
			$logs = array(
				'userid' => $userid,
				'signdate' => $lastsign
			);
			$this->db->insert('logs', $logs);
			$this->output->set_content_type('application/json')->set_output(json_encode(array('warning' => '1')));
		}else{
			$this->output->set_content_type('application/json')->set_output(json_encode(array('warning' => '0')));
		}
	}
}