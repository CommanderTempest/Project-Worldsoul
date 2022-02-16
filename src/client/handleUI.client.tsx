import Roact from "@rbxts/roact";
import {Players} from "@rbxts/services";

let playerGui = Players.LocalPlayer.FindFirstChild("PlayerGui") as PlayerGui;

let myHotbarRefs = new Array<Roact.Ref>();

let slot1 = Roact.createRef<TextButton>();

let hotbarUI = (
  <screengui ResetOnSpawn={false}>
    <frame>
      <textbutton 
        Event= {{MouseButton1Down: () => moveButton}}
        Ref = {slot1}
      />
    </frame>
  </screengui>
)

slot1.getValue(); // I can then access textbutton1's properties

let myHandle = Roact.mount(<screengui></screengui>, playerGui, "hotbarUI");

//*********************************************************

// the moveButton function moves the button UI from the hotbar 
// and follows the player's mouse until released

function moveButton(x: number, y: number) 
{
  //Players.LocalPlayer.GetMouse().
  
} 

//*********************************************************

// releaseButton handles either dropping a hotbar action
// onto a blank spot, or swapping if otherwise

function releaseButton()
{

}