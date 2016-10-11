<?php
class Register extends CI_Controller {

	public function __construct(){
		parent::__construct();
		$this->load->model('register_Model');
	}	

	public function index()
	{
		$params = json_decode(file_get_contents('php://input'),true);
		$data = array(
			'name' => $params['name'],
			'email' => $params['email'],
			'direct' => $params['direct']
		);
		$sql = $this->db->insert('register',$data);
		if($sql){
			echo "yes";
		}else{
			echo "no";
		}
	}
}