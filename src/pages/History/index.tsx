import { useContext } from 'react'
import { HistoryContainer, HistoryList, Status } from './styles'
import { CyclesContext } from '../../contexts/CyclesContext'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export function HistoryPage() {
  const { cycles } = useContext(CyclesContext)

  const bodyContent = cycles.map((cycle) => {
    return (
      <tr key={cycle.id}>
        <td> {cycle.task} </td>
        <td> {cycle.minutesAmount} minutos</td>
        <td>
          {' '}
          {formatDistanceToNow(new Date(cycle.startDate), {
            addSuffix: true,
            locale: ptBR,
          })}{' '}
        </td>
        <td>
          {cycle.finishedDate && <Status statusColor="green">Concluído</Status>}

          {cycle.interruptionDate && (
            <Status statusColor="red">Interrompido</Status>
          )}

          {!cycle.finishedDate && !cycle.interruptionDate && (
            <Status statusColor="yellow">Em andamento</Status>
          )}
        </td>
      </tr>
    )
  })

  return (
    <HistoryContainer>
      <h1>Meu histórico</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>{bodyContent}</tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
