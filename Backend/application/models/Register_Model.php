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
		$cname = $this->db->get_where('register', array('name' => $name))->row();
		$cemail = $this->db->query('select * from register where email = "'.$email.'"')->row();
		if(isset($cname->name)){
			return array('error' => 'Name has been signed.');
		}else if(isset($cemail->email)){
			return array('error' => 'Email has been used.');
		}
	}

	public function checkNP($name, $passwd){
		$cname = $this->db->query('select * from register where name = "'.$name.'"')->row();
		if(!isset($cname->name)){
			return array('error' => 'Name is not exisit.');
		}else{
			$cpasswd = $this->db->query('select id from register where name = "'.$name.'" and passwd = "'.$passwd.'" ')->row();
			if(isset($cpasswd->id)){
				return $cpasswd;
			}else{
				return array('error' => 'Passwd is not right.');
			}
		}
	}

}