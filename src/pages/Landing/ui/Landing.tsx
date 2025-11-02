import { GameModeList } from "@/widgets/GameModeList/ui/GameModeList";
import css from './Landing.module.css';
import { Reference } from "@/shared/ui/Reference";
import { Eda } from "@/features/Eda";

export const Landing = () => {
	return (
		<>
			<div className={css.refWrapper}>
				<Reference path="https://github.com/GermanKulchinskii/connect-four">Исходный код на GitHub</Reference>
				<Reference path="">Резюме</Reference>
			</div>
			<GameModeList />
			<Eda className={css.eda} />
		</>
	)
}