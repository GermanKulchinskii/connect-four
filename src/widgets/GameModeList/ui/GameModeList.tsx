import { GameModeButton } from "@/features/GameModeButton"
import GAME_MODES from "@/shared/constants/GameContants"
import css from './GameListMode.module.css'
import { Link } from "react-router"

export const GameModeList = () => {
    return (
        <div className={css.wrapper}>
            <h2>Выбери режим игры</h2>
            <div className={css.gameModeList}>
                <Link to="/single-game">
                    <GameModeButton gameMode={GAME_MODES.SINGLE_PLAYER}>Одиночная</GameModeButton>
                </Link>
                    <GameModeButton gameMode={GAME_MODES.MULTI_PLAYER}>Мультиплеер</GameModeButton>
                <Link to="/versus-eda">
                    <GameModeButton gameMode={GAME_MODES.VERSUS_EDA}>Против Эды</GameModeButton>
                </Link>
                <GameModeButton gameMode={GAME_MODES.EMPTY_MODE}></GameModeButton>
            </div>
        </div>
    )
}