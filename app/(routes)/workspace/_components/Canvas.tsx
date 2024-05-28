import React, { useEffect, useState } from 'react'
import { Excalidraw, MainMenu, WelcomeScreen } from "@excalidraw/excalidraw";
import { useTheme } from "next-themes";
import { FILE } from '@/app/models/File';
import { useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { toast } from 'sonner';

const Canvas = ({onSaveTrigger, fileId, fileData}: {onSaveTrigger: any, fileId:any, fileData: FILE}) => {
    const {theme } = useTheme();
    const [whiteBoardData, setWhiteBoardData] = useState<any>();
    const updateWhiteBoard = useMutation(api.files.updateWhiteboard);
    const saveWhiteBoard = () => {
        updateWhiteBoard({
            _id: fileId,
            whiteboard: JSON.stringify(whiteBoardData)
        }).then(resp => {
            if(resp){
              toast("Document updated successfully.");
            }
          }, (e) => {
            if(e){
              toast("Some Error while updating the document.")
            }
          })
        .catch((error) => {
          console.log('Saving failed :', error );
        })
    }
    useEffect(()=> {
        onSaveTrigger && saveWhiteBoard();
    }, [onSaveTrigger])
  return (
    <div style={{ height: "90vh" }}>
        <Excalidraw theme={theme=== 'dark'? 'dark': 'light'}
        initialData={{
            elements: fileData?.whiteboard && JSON.parse(fileData?.whiteboard)
        }}
        onChange={(excalidrawElements, appState, files) => setWhiteBoardData(excalidrawElements)}>
            <MainMenu>
                <MainMenu.DefaultItems.ClearCanvas />
                <MainMenu.DefaultItems.SaveAsImage />
                <MainMenu.DefaultItems.ChangeCanvasBackground />
            </MainMenu>
            <WelcomeScreen>
                <WelcomeScreen.Hints.MenuHint />
                <WelcomeScreen.Hints.ToolbarHint />
            </WelcomeScreen>
        </Excalidraw>
      </div>
  )
}

export default Canvas