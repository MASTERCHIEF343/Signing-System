<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
header('P3P: CP="CAO PSA OUR"'); // Makes IE to support cookies
header("Content-Type: application/json; charset=utf-8");

class Register extends CI_Controller {
	public function __construct(){
		parent::__construct();
		$this->load->model('register_Model');
	}	

	public function logup()
	{
		$params = json_decode($this->input->raw_input_stream);
		$data = array(
			'name' => $params->data->name,
			'email' => $params->data->email,
			'passwd' => $params->data->passwd,
			'direct' => $params->data->direct
		);
		$check = $this->register_Model->checkNE($data["name"],$data["email"]);
		if(isset($check["error"])){
			$error = json_encode(array('error' => $check["error"]));
			return $this->output->set_content_type('application/json')->set_output($error);
		}else if(isset($check["success"])){
			$this->db->insert('register', $data);
			$id = $this->db->query('select id from register where name = "'.$data["name"].'" and passwd = "'.$data["passwd"].'" ')->row();
			$this->output->set_content_type('application/json')->set_output(json_encode(array('id' => $id)));
		}
	}

	public function login()
	{
		$params = json_decode($this->input->raw_input_stream);
		$data = array(
			'name' => $params->data->name,
			'passwd' => $params->data->passwd
		);
		$check = $this->register_Model->checkNP($data["name"], $data["passwd"]);
		if(isset($check["error"])){
			$error = array('error' => $check['error']);
			$this->output->set_content_type('application/json')->set_output(json_encode($error));
		}else if(isset($check["id"])){
			$this->output->set_content_type('application/json')->set_output(json_encode(array('id' => $check["id"])));
		}
	}
}