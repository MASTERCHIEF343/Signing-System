<?php
class Register extends CI_Controller {
	public function __construct(){
		parent::__construct();
		$this->load->model('register_Model');
	}	

	public function logup()
	{
		$params = json_decode(file_get_contents('php://input'),true);
		$data = array(
			'name' => $params["data"]["name"],
			'email' => $params["data"]["email"],
			'passwd' => $params["data"]["passwd"],
			'direct' => $params["data"]["direct"]
		);
		$check = $this->register_Model->checkNE($data["name"],$data["email"]);
		if($check["error"]){
			$error = json_encode(array('error' => $check["error"]));
			return $this->output->set_content_type('application/json')->set_output($error);
		}else{
			$this->db->insert('register', $data);
			$data = json_encode(array('success' => 'Yes'));
			return $this->output->set_content_type('application/json')->set_output($data);
		}
	}

	public function login()
	{
		$params = json_decode(file_get_contents('php://input'), true);
		$data = array(
			'name' => $params["data"]["name"],
			'passwd' => $params["data"]["passwd"]
		);
		$check = $this->register_Model->checkNP($data["name"], $data["passwd"]);
		if(isset($check->error)){
			$error = json_encode(array("error" => $check["error"]));
			return $this->output->set_content_type('application/json')->set_output($error);
		}else{
			$id = json_encode($check);
			return $this->output->set_content_type('application/json')->set_output($id);
		}
	}
}