/*
Manage the simon game

sofia
*/

using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class simonController : MonoBehaviour
{
    [SerializeField] List<simonButton> buttons;
    [SerializeField] float delay = 0.5f;
    [SerializeField] bool playerTurn = false;
    [SerializeField] List<int> sequence;
    [SerializeField] int level = 0;

    int counter = 0;

    void start(){
        PrepareButtons();
    }

    void AddToSequence(){
        sequence.Add(Random.Range(0, buttons.Count));
    }

    IEnumerator PlaySequence(){
        foreach (int i in sequence){
            buttons[i].highlight();
            yield return new WaitForSeconds(delay);

        }
        playerTurn = true;
    }

    void PrepareButtons(){
        for (int i = 0; i < buttons.Count; i++){
            buttons[i].gameObject.GetComponent<Button>().onClick.AddListener(() => ButtonPressed(i));
        }
        AddToSequence();
    }

    public void ButtonPressed(int i){
        if (playerTurn){
            if (i == sequence[counter++]){
                if (counter == sequence.Count){
                    level++;
                    counter = 0;
                    playerTurn = false;
                    AddToSequence();
                }
            } else {
                Debug.Log("game over!");
            }
        }
    }
}
