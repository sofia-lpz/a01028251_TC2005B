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
    AudioSource audio;

    public void Init(int index)
    {
        originalColor = GetComponent<Image>().color;
        audio = GetComponent<AudioSource>();
        audio.clip = Resources.Load<AudioClip>("audio/buzzer");
    }

    public void highlight(){
        audio.Play();
        StartCoroutine(ChangeColor());
    }

    IEnumerator ChangeColor(){
        GetComponent<Image>().color = Color.white;
        // wait a moment before changing back
        yield return new WaitForSeconds(delay);

        GetComponent<Image>().color = originalColor;
    }

   
}
