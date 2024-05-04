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
    List<string> notes = new List<string>
    {
        "C4",
        "D4",
        "E4",
        "F4",
        "G4",
        "A4",
        "B4",
        "C5",
        "D5",
        "E5",
        "F5",
        "G5",
        "A5",
        "B5",
        "C6",
    };

    public void Init(int i)
    {
        originalColor = GetComponent<Image>().color;
        audioSource = GetComponent<AudioSource>();
        audioSource.clip = Resources.Load<AudioClip>("audio/piano-mp3/" + notes[i]);
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
            GetComponent<Image>().color = Color.Lerp(originalColor, Color.black, 0.7f);
        }
        else
        {
            GetComponent<Image>().color = Color.Lerp(originalColor, Color.white, 0.9f);
        }
        audioSource.Play();
        yield return new WaitForSeconds(delay);
        GetComponent<Image>().color = originalColor;
    }
}