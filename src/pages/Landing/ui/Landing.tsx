import { GameModeList } from "@/widgets/GameModeList/ui/GameModeList";
import css from './Landing.module.css';
import { Reference } from "@/shared/ui";
import { Eda } from "@/features/Eda";

export const Landing = () => {
	return (
		<>
			<div className={css.refWrapper}>
				<Reference path="https://github.com/GermanKulchinskii/connect-four">Исходный код на GitHub</Reference>
				<Reference path="https://ekaterinburg.hh.ru/resume/93f4b20fff0db323b20039ed1f354968457066">Резюме</Reference>
			</div>
			<div className={css.menu}>
				<GameModeList />
			</div>
			<Eda className={css.eda} />
		</>
	)
}