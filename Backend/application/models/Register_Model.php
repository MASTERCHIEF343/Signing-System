<?php
class Register_Model extends CI_Model {
	public $name;
	public $email;
	public $direct;

	public function __construct()
	{
		$this->load->database();
	}
}