/*
Manage the flow of the Simon game
Keep track of the turn, and the list of buttons to press
*/

using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using TMPro;
using UnityEngine.SceneManagement;


public class simonController : MonoBehaviour
{
    [SerializeField] List<simonButton> buttons;
    [SerializeField] List<int> sequence;
    [SerializeField] List<int> playerSequence;
    [SerializeField] int level = 1;
    [SerializeField] int completedSequences = 0;
    [SerializeField] bool playerTurn = false;
    [SerializeField] GameObject buttonPrefab;
    [SerializeField] Transform buttonParent;
    [SerializeField] int initialButtons = 9;
    [SerializeField] int currentSequenceIndex = 0;
    [SerializeField] float delay = 1.4f;
    [SerializeField] TMP_Text scoreText;
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
    createButtons(initialButtons);
    AddtoSequence();
    StartCoroutine(PlaySequence());
}

void createButtons(int numButtons){
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
}

void ButtonPressed(int player_button_index)
{
    if (playerTurn)
    {
        buttons[player_button_index].HighlightPlayer();
        if (player_button_index == sequence[currentSequenceIndex])
        {
            Debug.Log("Correct button");
            currentSequenceIndex++;

            if (currentSequenceIndex == sequence.Count)
            {
                Debug.Log("Sequence completed");
                
                currentSequenceIndex = 0;
                completedSequences++;

                delay *= 0.8f;
                scoreText.text = "score: " + completedSequences.ToString();
                if (completedSequences == 3)
                {
                    level++;
                }
                
                AddtoSequence();
                StartCoroutine(PlaySequence());
            }
        }
        else
        {
            Debug.Log("Game Over!");
            SceneManager.LoadScene("GameOverSceneSimon");
            return;
        }
    }
}

void AddtoSequence()
{
    sequence.Add(Random.Range(0, buttons.Count));
}

IEnumerator PlaySequence()
{
    
    yield return new WaitForSeconds(1);
    playerTurn = false;
    for (int i = 0; i < buttons.Count; i++)
    {
        buttons[i].Dim();
    }
    foreach (int index in sequence)
    {
        yield return new WaitForSeconds(delay);
        buttons[index].Highlight();
    }
    yield return new WaitForSeconds(1);
    
    for (int i = 0; i < buttons.Count; i++)
    {
        buttons[i].Light();
    }
    playerTurn = true;
}

}




