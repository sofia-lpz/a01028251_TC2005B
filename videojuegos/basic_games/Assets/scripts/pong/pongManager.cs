/*
Game manager for pong
Sofia Moreno Lopez
*/

using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;

public class pongManager : MonoBehaviour
{
    [SerializeField] GameObject ball;
    [SerializeField] GameObject ballPrefab;
    [SerializeField] float speed;

    [SerializeField] TMP_Text scoreLeft;
    [SerializeField] TMP_Text scoreRight;

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
     if (Input.GetKeyDown(KeyCode.R)){
       Reset();
     }
    }

public void Reset(){
    if (ball != null){
        Destroy(ball);
        pointsLeft = 0;
        pointsRight = 0;
        InitGame();
    }
}




    public
    void score (string side){
        if (side == "left"){
            pointsLeft++;
            scoreLeft.text = pointsLeft.ToString();
        }
        else if (side == "right"){
            pointsRight++;
            scoreRight.text = pointsRight.ToString();
        }

InitGame();
    }
}
