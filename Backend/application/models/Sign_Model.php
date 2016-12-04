<?php
class Sign_Model extends CI_Model {
	public $userid;
	public $signstatus;
	public $lastsign;

	public function __construct()
	{
		$this->load->database();
	}

	public function checkSign($id)
	{
		$userid = $id;
		$signstatus = $this->db->query('select signstatus from registration where userid = "'.$userid.'" ');
	}

	public function inputSign()
	{

	}
	
}