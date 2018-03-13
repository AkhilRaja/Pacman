#pragma strict

var direction : int = 1;
var temp_decs : float;

var dest : Vector3;
var dir  : Vector3;
var animatin : Animator;

function Start () {
 animatin = GetComponent("Animator");
}

function Update () {
		
		
		if (Input.GetKey (KeyCode.RightArrow))
		{
			direction = 1;
			animatin.SetFloat("DirX",1);
			 animatin.SetFloat("DirY",0);
		 
			
		}
		if (Input.GetKey (KeyCode.LeftArrow))
		{
		    direction = 2;
		    animatin.SetFloat("DirX",-1);
		animatin.SetFloat("DirY",0);
			  
		}
		if (Input.GetKey (KeyCode.UpArrow))
		{
			direction = 3;
			animatin.SetFloat("DirY", 1);
		animatin.SetFloat("DirX", 0);
			
		}
		if (Input.GetKey (KeyCode.DownArrow))
		{
			direction = 4;
			animatin.SetFloat("DirY", -1);
		animatin.SetFloat("DirX",  0);
			
		}
   
	switch(direction)
	{
		case 1 :
		 transform.position.x += 0.2;
		 
   		 

		break;

		case 2 :
		transform.position.x -= 0.2;
		
		break;	
		
		case 3 :
		transform.position.y += 0.2;
		
		break;

		case 4 :
		transform.position.y -= 0.2;
		
		break;

	} 

}