/*
Manage the flow of the Simon game
Keep track of the turn, and the list of buttons to press

*/

using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;


public class simonController : MonoBehaviour
{
    [SerializeField] List<simonButton> buttons;
    [SerializeField] List<int> sequence;
    [SerializeField] float delay;
    [SerializeField] int level;
    [SerializeField] bool playerTurn = false;
    [SerializeField] GameObject buttonPrefab;
    [SerializeField] Transform buttonParent;
    [SerializeField] int numButtons;

    [SerializeField] int counter = 0;
    

    // Start is called before the first frame update
    void Start()
    {
        // Configure the buttons to be used in the game
        //update
        PrepareButtons();
    }

    // Configure the callback functions for the buttons
    void PrepareButtons()
    {
        for (int i=0; i<numButtons; i++) {
            int index = i;
            GameObject newButton = Instantiate(buttonPrefab, buttonParent);
           

            buttons.Add(newButton.GetComponent<simonButton>());
            buttons[i].gameObject.GetComponent<Button>().onClick.AddListener(() => ButtonPressed(index));
            
            newButton.GetComponent<Image>().color = Color.HSVToRGB((float) index/numButtons, 1, 1);
            newButton.GetComponent<simonButton>().Init(index);

        }
        // Start the game by adding the first button
        AddToSequence();
    }

    // Main function to validate that the button pressed by the user 
    // corresponds with the sequence generated by the CPU
    public void ButtonPressed(int index) {
        if (playerTurn) {
            if (index == sequence[counter++]) {
                // highlight the button selected by the player
                buttons[index].highlight();
                if (counter == sequence.Count) {
                    // Finish the player turn to ensure no other actions are
                    // taken into account
                    playerTurn = false;
                    level++;
                    counter = 0;
                    AddToSequence();
                }
            } else {
                Debug.Log("Game Over!");
            }
        }
    }

    // Add another number to the sequence and display it
    void AddToSequence()
    {
        // Add a new button to the sequence
        sequence.Add(Random.Range(0, buttons.Count));
        StartCoroutine(PlaySequence());
    }

    // Display every button in the sequence so far
    IEnumerator PlaySequence()
    {
        // Add an initial delay before showing the sequence
        yield return new WaitForSeconds(delay);
        foreach (int index in sequence) {
            buttons[index].highlight();
            yield return new WaitForSeconds(delay);
        }
        // Switch the turn over to the player
        playerTurn = true;
    }
}