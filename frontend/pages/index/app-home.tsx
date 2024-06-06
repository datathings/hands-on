import { GuiSearchableSelect, GuiTable, core } from '@greycat/web';
import './app-home.module.css';
import { api } from '../../common/project';

export class AppHome extends HTMLElement {
  
  projectSector: GuiSearchableSelect;
  fromDate: HTMLInputElement;
  toDate: HTMLInputElement;
  report: GuiTable;


  constructor() {
    super();

    this.projectSector = new GuiSearchableSelect();
    this.projectSector.addEventListener('searchable-select-change', (_)=>{
      this.getReport();
    })
    this.fromDate = <input type="date" id="from" name="from" value="2023-04-01" /> as HTMLInputElement;
    this.toDate = <input type="date" id="to" name="to" value="2023-09-30" /> as HTMLInputElement;

    this.report = new GuiTable();
  }

  async connectedCallback() {
    
    this.buildUi();

    api.getProjectsList().then((projectsList) => {
      var options = projectsList.map((v)=>({text: v, value: v}));
      options.push({text: 'ALL', value: '@'});
      this.projectSector.options = options;
    });

  }

  disconnectedCallback() {
    this.replaceChildren();
  }

  private getReport() {
    var proj = (this.projectSector.value as string == '@' ? null : this.projectSector.value as string);
    api.computeReport(proj, core.time.fromDate(this.fromDate.valueAsDate!), core.time.fromDate(this.toDate.valueAsDate!)).then((res)=> {
      this.report.value = res; 
    });
  }

  private buildUi() {
    this.appendChild(
      <div className="container-fluid" role="list">
        <article>
          <header>Generate Report</header>
          <div className="container">
            <div className="row">
              {this.projectSector}
              {this.fromDate}
              {this.toDate}
            </div>
          </div>
          <div className="container">
            <div className="row" style={{height: '500px'}}>
              {this.report}
            </div>
          </div>
        </article>
      </div>,
    );
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-home': AppHome;
  }

  namespace JSX {
    interface IntrinsicElements {
      'app-home': GreyCat.Element<AppHome>;
    }
  }
}

if (!customElements.get('app-home')) {
  customElements.define('app-home', AppHome);
}
