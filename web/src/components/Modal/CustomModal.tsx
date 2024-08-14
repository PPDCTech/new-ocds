import * as React from "react";
import "./style.css";
import { Typography, Box } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

type Props = {
	toggleModal: () => void;
	isOpen: boolean;
	modalContent: JSX.Element;
	headerText: string;
};

export const CustomModal = ({
	isOpen,
	toggleModal,
	modalContent,
	headerText,
}: Props) => {
	const descriptionElementRef = React.useRef<HTMLElement>(null);
	React.useEffect(() => {
		if (isOpen) {
			const { current: descriptionElement } = descriptionElementRef;
			if (descriptionElement !== null) {
				descriptionElement.focus();
			}
		}
	}, [isOpen]);

	return (
		<Dialog
			keepMounted
			open={isOpen}
			onClose={toggleModal}
			scroll="body"
			aria-labelledby="scroll-dialog-title"
			aria-describedby="scroll-dialog-description"
			maxWidth="xl"
		>
			<Box sx={{padding: "20px"}}>
				<button onClick={toggleModal} className="modal__close__btn">
					&#10006;
				</button>
			</Box>
			<DialogTitle
				id="scroll-dialog-title"
			></DialogTitle>
			<DialogContent>
				<DialogContentText
					id="scroll-dialog-description"
					ref={descriptionElementRef}
				>
					<DialogContentText
						id="scroll-dialog-description"
						ref={descriptionElementRef}
						tabIndex={-1}
					>
						<Box className="modal__content" id="keep-mounted-modal-title">
							<Box className="modal__header">
								<Typography className="modal__header__text">{headerText}</Typography>
							</Box>
							<Box className="modal__body" id="keep-mounted-modal-description">
								{modalContent}
							</Box>
						</Box>
					</DialogContentText>
				</DialogContentText>
			</DialogContent>
		</Dialog>
	);
};
