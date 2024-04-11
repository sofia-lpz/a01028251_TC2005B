/*
Game manager for pong
Sofia Moreno Lopez
*/

using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class pongManager : MonoBehaviour
{
    [SerializeField] GameObject ball;
    [SerializeField] GameObject ballPrefab;
    [SerializeField] float speed;

    public int pointsLeft;
    public int pointsRight;

    void Start()
    {
       InitGame(); 
    }


    void InitGame()
    {
        StartCoroutine(serveBall());
    }

    IEnumerator serveBall(){
        yield return new WaitForSeconds(1.0f);
        ball = Instantiate(ballPrefab);
        ball.GetComponent<Rigidbody2D>().velocity = Random.insideUnitCircle.normalized * speed;
    }

 void Update()
    {
     if (Input.GetKeyDown(KeyCode.R) && ball != null){
        Destroy(ball);
        InitGame();
        pointsLeft = 0;
        pointsRight = 0;
     }
    }

    public
    void score (string side){
        if (side == "left"){
            pointsLeft++;
        }
        else if (side == "right"){
            pointsRight++;
        }

InitGame();
    }
}
