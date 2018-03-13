#pragma strict
var score : int=0;
var disp_score : UnityEngine.UI.Text;

function Start () {

}

function OnTriggerEnter2D(co : Collider2D ) 
   {
   		
        if (co.name == "Pacman"){
            
            score+=5;
            disp_score.text = score.ToString();
            Debug.Log(score);Destroy(gameObject);
            
            
            }
   }

function Update () {
}