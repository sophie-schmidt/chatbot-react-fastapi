'use client';

import { useState, Component, createRef  } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog } from '@fortawesome/free-solid-svg-icons'

/*
    InputProps Interface
    Defines the props for the MyInputForAgent component.
*/                  
interface InputProps {
  value: string;
  disabled?: boolean;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
}

/*
    MyInputForAgent Component
    A controlled textarea input component that handles focus and disabled state.
*/ 
class MyInputForAgent extends Component<InputProps> {
   private textareaRef: React.RefObject<HTMLTextAreaElement | null>;

  constructor(props: InputProps) {
    super(props)
    this.textareaRef = createRef();
  }

  /* Focus the textarea on mount */
  componentDidMount() {
    this.textareaRef?.current?.focus();
  }

  /* Refocus the textarea when it becomes enabled */
  componentDidUpdate(prevProps: InputProps) {
    if (this.props.disabled !== prevProps.disabled && !this.props.disabled) {
      this.textareaRef?.current?.focus();
    }
  }

  /* Render the textarea or a loading indicator based on disabled state */
  render() {
    if (this.props.disabled) {
      return <div className="w-full bg-gray-100 text-lime-900 pt-3 h-12 font-light italic">
        <FontAwesomeIcon icon={faCog} spin className="mr-2"/>
        en attente de la réponse...
      </div>
    } else {
      return <textarea 
                  ref={this.textareaRef}
                  value={this.props.value}
                  disabled={this.props.disabled}
                  onChange={this.props.onChange}
                  onKeyDown={this.props.onKeyDown}
                  className="w-full bg-gray-100 pt-3 h-12 focus:outline-none font-light"
                  placeholder="Poser votre question ici"/>;
    }
  }
}

/* InputToAgent Component
   A functional component that manages the state of the input value and handles user actions.
*/
export function InputToAgent({ onAction, disabled }: { onAction?: (message: string) => void, disabled?: boolean }) {
    const [value, setValue] = useState(""); 
    
    const handleKeyDown = (e: any) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault(); // empêche le saut de ligne
            const newEntry = value.trim();
            if (newEntry && onAction) {
                onAction(newEntry);
            }
           setValue(""); // Réinitialise la valeur après l'envoi
        }
    };

    return (
        <>
            <MyInputForAgent 
                value={value}
                disabled={disabled}
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={handleKeyDown}>
            </MyInputForAgent>
        </>
    )
}