/*
Detect out of bound ball

Sofia Moreno Loeez
*/
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class pongGoal : MonoBehaviour
{
    [SerializeField] string side;
    pongManager manager;
    
    void Start()
    {
        manager = GameObject.FindWithTag("GameController").GetComponent<pongManager>();
    }

    void OnCollisionEnter2D(Collision2D other){
        manager.score(side);
        Destroy(other.gameObject);
    }
}
