﻿#pragma strict


var waypoints : Transform[];
var cur : int = 0;
var speed : float = 0.1;

function Start () {

}

function FixedUpdate () {
    // Waypoint not reached yet? then move closer
    if (transform.position != waypoints[cur].position) {
       var p : Vector3 = Vector3.MoveTowards(transform.position,
                                        waypoints[cur].position,
                                        speed);
        GetComponent.<Rigidbody2D>().MovePosition(p);
    }
   
}


function OnTriggerEnter2D(co : Collider2D ) {
    if (co.name == "Pacman")
        Destroy(co.gameObject);
}	