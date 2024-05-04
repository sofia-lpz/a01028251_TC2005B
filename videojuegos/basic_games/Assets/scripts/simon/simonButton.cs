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
    [SerializeField] float delay = 1f;
    [SerializeField] int index;
    AudioSource audioSource;


    public void Init(int i)
    {
        originalColor = GetComponent<Image>().color;
        audioSource = GetComponent<AudioSource>();
        audioSource.clip = Resources.Load<AudioClip>("audio/buzzer");
        index = i;
    }

    public void Highlight()
    {
        StartCoroutine(HighlightCoroutine(false));
    }

    public void HighlightPlayer()
    {
        StartCoroutine(HighlightCoroutine(true));
    }

    IEnumerator HighlightCoroutine(bool player)
    {
        if (player)
        {
            GetComponent<Image>().color = Color.white;
        }
        else
        {
            GetComponent<Image>().color = Color.black;
        }
        audioSource.Play();
        yield return new WaitForSeconds(delay);
        GetComponent<Image>().color = originalColor;
    }
}