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
	}	

	public function dateTimer(){
		$params = json_decode($this->input->raw_input_stream);
		$data = array(
			'userid' => $params->data->userid,
			'lastsign' => $params->date->signtime
		)
	}
}