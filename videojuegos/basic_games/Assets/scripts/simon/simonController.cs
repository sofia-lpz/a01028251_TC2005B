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
    List<Color> colors = new List<Color>
{
    Color.red,
    Color.green,
    Color.blue,
    Color.yellow,
    Color.magenta,
    Color.cyan,
};

void Start()
{
    // create the buttons
    for (int i = 0; i < numButtons; i++)
    {
        GameObject button = Instantiate(buttonPrefab, buttonParent);
        Image buttonImage = button.GetComponent<Image>();
        
        // Ensure that the index is within the range of the colors list
        int colorIndex = i % colors.Count;
        
        buttonImage.color = colors[colorIndex];
        simonButton simonButton = button.GetComponent<simonButton>();
        simonButton.Init(i);
    
        // Add the button to the buttons list
        buttons.Add(simonButton);

        int buttonIndex = i;
        //index holder due to lambda function issues

        button.GetComponent<Button>().onClick.AddListener(() => ButtonPressed(buttonIndex));
    }

    AddtoSequence();
    StartCoroutine(PlaySequence());
}

void ButtonPressed(int player_button_index)
{
    if (playerTurn){

for (int i = 0; i < numButtons; i++)
{

if (player_button_index == sequence[i]){
    Debug.Log("Correct button");
}
else
{
    Debug.Log("Wrong button");
}
}
}
}

void AddtoSequence()
{
    sequence.Add(Random.Range(0, numButtons));
}

IEnumerator PlaySequence()
{
    playerTurn = false;
    foreach (int index in sequence)
    {
        buttons[index].Highlight();
        yield return new WaitForSeconds(delay);
    }
    playerTurn = true;
}

}




