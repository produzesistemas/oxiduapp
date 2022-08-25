import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CategoryService {
private categorys: any[] = [];
private states: any[] = [];
    constructor() {
        this.load();
        this.loadStates();
    }

    load() {
        this.categorys.push(
          {id: 1, description: 'Esportes', icon: 'bicycle', open: false, subcategorys: [{
            id: 1, description: "Pranchas de surf", active: true, categoryId: 1
          }]}
          );
      }

      get() {
        return this.categorys;
    }

    getSubCategory(id) {
      return this.categorys.find(x => x.subcategorys.find(c => c.id === id));
    }

    loadStates() {
      this.states.push({id: 1, description: 'Acre', sigla: 'AC', active: false});
      this.states.push({id: 2, description: 'Alagoas', sigla: 'AL', active: true});
      this.states.push({id: 3, description: 'Amapá', sigla: 'AP', active: true});
      this.states.push({id: 4, description: 'Amazonas', sigla: 'AM', active: false});
      this.states.push({id: 5, description: 'Bahia', sigla: 'BA', active: true});
      this.states.push({id: 6, description: 'Ceará', sigla: 'CE', active: true});
      this.states.push({id: 7, description: 'Distrito Federal', sigla: 'DF', active: false});
      this.states.push({id: 8, description: 'Espírito Santo', sigla: 'ES', active: true});
      this.states.push({id: 9, description: 'Goiás', sigla: 'GO', active: false});
      this.states.push({id: 10, description: 'Maranhão', sigla: 'MA', active: true});
      this.states.push({id: 11, description: 'Mato Grosso', sigla: 'MT', active: false});
      this.states.push({id: 12, description: 'Mato Grosso do Sul', sigla: 'MS', active: false});
      this.states.push({id: 13, description: 'Minas Gerais', sigla: 'MG', active: false});
      this.states.push({id: 14, description: 'Pará', sigla: 'PA', active: true});
      this.states.push({id: 15, description: 'Paraíba', sigla: 'PB', active: true});
      this.states.push({id: 16, description: 'Paraná', sigla: 'PR', active: true});
      this.states.push({id: 17, description: 'Pernambuco', sigla: 'PE', active: true});
      this.states.push({id: 18, description: 'Piauí', sigla: 'PI', active: true});
      this.states.push({id: 19, description: 'Rio de Janeiro', sigla: 'RJ', active: true});
      this.states.push({id: 20, description: 'Rio Grande do Norte', sigla: 'RN', active: true});
      this.states.push({id: 21, description: 'Rio Grande do Sul', sigla: 'RS', active: true});
      this.states.push({id: 22, description: 'Rondônia', sigla: 'RO', active: false});
      this.states.push({id: 23, description: 'Roraima', sigla: 'RR', active: false});
      this.states.push({id: 24, description: 'Santa Catarina', sigla: 'SC', active: true});
      this.states.push({id: 25, description: 'São Paulo', sigla: 'SP', active: true});
      this.states.push({id: 26, description: 'Sergipe', sigla: 'SE', active: true});
      this.states.push({id: 27, description: 'Tocantins', sigla: 'TO', active: false});
    }

    getStates() {
      return this.states.filter(x => x.active);
  }

  getState(id) {
    return this.states.find(x => x.id === id);
  }

}
