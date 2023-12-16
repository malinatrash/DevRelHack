import { FC } from 'react'

interface IStepPoint {
	isChoosen: boolean
	onClick: () => void
}

const StepPoint: FC<IStepPoint> = ({ isChoosen, onClick }) => {
	return (
		<div
			onClick={onClick}
			className={`${
				isChoosen ? 'bg-primary/10 scale-125' : 'bg-primary'
			} border-foreground border w-4 h-4 rounded-full transition-all hover:scale-110`}
		></div>
	)
}

export default StepPoint
