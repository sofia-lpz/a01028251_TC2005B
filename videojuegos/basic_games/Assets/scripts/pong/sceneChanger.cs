/*
Changes scene
Sfoia
*/
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class sceneChanger : MonoBehaviour
{
    public static void goTo(string scene){
        UnityEngine.SceneManagement.SceneManager.LoadScene(scene);
    }
}
