/*
Make the button play a sound and highlight it

Sfoia
*/

using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class simonButton : MonoBehaviour
{

    Color originalColor;
    [SerializeField] float delay = 0.5f;

    void Start()
    {
        originalColor = GetComponent<Image>().color;
    }

    public void highlight(){
        StartCoroutine(ChangeColor());
    }

    IEnumerator ChangeColor(){
        GetComponent<Image>().color = Color.white;
        // wait a moment before changing back
        yield return new WaitForSeconds(delay);

        GetComponent<Image>().color = originalColor;
    }

   
}
