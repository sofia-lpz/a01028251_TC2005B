/*
Controlls the movement of the a game paddle

Sofia Moreno Lopez
09-abril-2024
*/

using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class paddleMotion : MonoBehaviour
{
    [SerializeField] float speed;
    [SerializeField] Vector2 direction;
    [SerializeField] KeyCode positiveKey;
    [SerializeField] KeyCode negativeKey;
    [SerializeField] float limit;

    void Update()
    {
        if (Input.GetKey(positiveKey) && transform.position.y < limit){
            transform.Translate(direction * speed * Time.deltaTime);
        }
        else if (Input.GetKey(negativeKey) && transform.position.y > -limit){
            transform.Translate(-direction * speed * Time.deltaTime);
        }
    }
}
