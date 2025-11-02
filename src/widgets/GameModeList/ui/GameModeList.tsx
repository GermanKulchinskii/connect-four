import { GameModeButton } from "@/features/GameModeButton"
import GAME_MODES from "@/shared/constants/GameContants"
import css from './GameListMode.module.css'

export const GameModeList = () => {
    return (
        <div className={css.wrapper}>
            <h2>Выбери режим игры</h2>
            <div className={css.gameModeList}>
                <GameModeButton gameMode={GAME_MODES.SINGLE_PLAYER}>Single Player</GameModeButton>
                <GameModeButton gameMode={GAME_MODES.MULTI_PLAYER}>Multiplayer</GameModeButton>
            </div>
        </div>
    )
}