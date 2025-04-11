import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

export interface Colaborador {
  nome: string;
  area: string;
  descricao: string;
  fotoUrl: string;
  linkedin?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ColaboradoresService {

  private STORAGE_KEY = 'colaboradores';

  private colaboradoresSubject = new BehaviorSubject<Colaborador[]>(
    this.carregarDoStorage()
  );

  getColaboradores(): Observable<Colaborador[]> {
    return this.colaboradoresSubject.asObservable();
  }

  adicionarColaborador(colaborador: Colaborador): void {
    const atual = this.colaboradoresSubject.getValue();
    const atualizado = [...atual, colaborador];
    this.colaboradoresSubject.next(atualizado);
    this.salvarNoStorage(atualizado);
  }

  removerColaborador(nome: string): void {
    const atual = this.colaboradoresSubject.getValue();
    const atualizado = atual.filter(colab => colab.nome !== nome);
    this.colaboradoresSubject.next(atualizado);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(atualizado));
  }

  private carregarDoStorage(): Colaborador[] {
    const dados = localStorage.getItem(this.STORAGE_KEY);
    return dados ? JSON.parse(dados) : [
      {
        nome: 'Demétrio Mestre',
        area: 'Educação',
        descricao: 'Professor com 10 anos de experiência.',
        fotoUrl: '/assets/imagens/demetrio.jpg',
        linkedin: 'https://br.linkedin.com/in/demetrio-mestre-381ba4a7'
      },
      {
        nome: 'Maria Oliveira',
        area: 'Consultoria',
        descricao: 'Especialista em negócios sustentáveis.',
        fotoUrl: '/assets/imagens/maria.jpg'
      },
      {
        nome: 'Natã Cavalcante',
        area: 'Apoio Financeiro',
        descricao: 'Ampla experiência em gestão financeira, controle orçamentário',
        fotoUrl: '/assets/imagens/natan.jpg',
        linkedin: 'https://www.linkedin.com/in/nat%C3%A3-cavalcante-19b340300/'
      }
    ];
  }

  private salvarNoStorage(colaboradores: Colaborador[]) {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(colaboradores));
  }

}
