using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;
using TMPro; 

public class sceneChangerSimon : MonoBehaviour
{
    [SerializeField] string sceneName;
    [SerializeField] TMP_Text scoreText;

    void Start()
    {
        Debug.Log("score: " + stateNameController.scoreGameOver);
        scoreText.text = "score: " + stateNameController.scoreGameOver;
    }



    public void ChangeScene()
    {
        SceneManager.LoadScene(sceneName);
    }
}