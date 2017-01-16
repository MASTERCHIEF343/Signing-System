<?php
class Sign_Model extends CI_Model {
	public $userid;
	public $signstatus;
	public $lastsign;

	public function __construct()
	{
		$this->load->database();
	}

	public function checkSignStatus($userid)
	{
		$uid = $userid;
		$result = $this->db->query('select signstatus from registration where userid="'.$uid.'" ')->row();
		return $result->signstatus;
	}

	public function getSignTimes($userid){
		$uid = $userid;
		$result = $this->db->query('select signdate from logs where userid="'.$uid.'" ')->result();
		return $result;
	}

	public function getId($userid)
	{
		$uid = $userid;
		$result = $this->db->query('select id from registration where userid="'.$uid.'" ')->row();
		return $result->id;
	}
}