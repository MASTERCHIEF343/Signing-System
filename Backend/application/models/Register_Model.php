<?php
class Register_Model extends CI_Model {
	public $name;
	public $passwd;
	public $email;
	public $direct;

	public function __construct()
	{
		$this->load->database();
	}

	public function checkNE($name,$email){
		$cname = $this->db->query('select * from register where name = "'.$name.'"')->row();
		if(isset($cname->name)){
			return array('error' => 'Name has been used.');
		}else{
			$cemail = $this->db->query('select * from register where email = "'.$email.'"')->row();
			if(isset($cemail)){
				return array('error' => 'Email has been used.');
			}else{
				return array('success' => 'All can be use');
			}
		}
	}

	public function checkNP($name, $passwd){
		$cname = $this->db->query('select * from register where name = "'.$name.'"')->row();
		if(!isset($cname->name)){
			return array('error' => 'Name is not exisit.');
		}else{
			$cpasswd = $this->db->query('select id from register where name = "'.$name.'" and passwd = "'.$passwd.'" ')->row();
			if(isset($cpasswd->id)){
				return array('id' => $cpasswd->id);
			}else{
				return array('error' => 'Passwd is not right.');
			}
		}
	}

}