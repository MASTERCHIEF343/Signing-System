<?php
class Register extends CI_Controller {
	public function __construct()
	{
		parent::__construct();
		$this->load->model('register_Model');
		$this->load->helper('url_helper');
	}

	public function index()
	{
		echo "Hello World";
	}
}