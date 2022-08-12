import styles from './WithoutTask.module.scss';

import clipboard from '../assets/Clipboard.svg';

export function WithoutTask() {
  return(
    <div className={styles.container}>
      <img src={clipboard} alt="Imagem de um clipboard" />
      <div>
        <span>
          Você ainda não tem tarefas cadastradas
        </span>
        <p>
          Crie tarefas e organize seus itens a fazer
        </p>
      </div>
    </div>
  )
}