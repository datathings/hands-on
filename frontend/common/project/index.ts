// AUTO-GENERATED FILE PLEASE DO NOT MODIFY MANUALLY
/* eslint-disable */
// @ts-nocheck

import * as $sdk from '@greycat/web';
import * as project_n from '../../project_n/index.js';

export namespace project {
}

export namespace api {
  export function getProjectsList($g: $sdk.GreyCat = globalThis.greycat.default, $signal?: AbortSignal): Promise<globalThis.Array<string>> {
    return $g.call('api::getProjectsList', undefined, $signal);
  }
  export function computeReport(project: string | null, from: $sdk.std.core.time, to: $sdk.std.core.time, $g: $sdk.GreyCat = globalThis.greycat.default, $signal?: AbortSignal): Promise<$sdk.std.core.Table> {
    return $g.call('api::computeReport', [project, from, to], $signal);
  }
}

export namespace data_loaders {
  export class DataLoaders extends $sdk.GCObject {
    static readonly _type = 'data_loaders::DataLoaders';


    static createFrom($g: $sdk.GreyCat = globalThis.greycat.default): DataLoaders {
      return new DataLoaders($g.abi.libs_by_name.get(projectlib.name)!.mapped[0]);
    }
    static create($g: $sdk.GreyCat = globalThis.greycat.default): DataLoaders {
      return new DataLoaders($g.abi.libs_by_name.get(projectlib.name)!.mapped[0]);
    }
  }

  export class TimesheetLine extends $sdk.GCObject {
    static readonly _type = 'data_loaders::TimesheetLine';

    employee_id: string;
    employee_name: string;
    date: $sdk.std.core.time;
    client: string;
    project: string;
    job: string;
    hours: $sdk.std.core.duration;

    static createFrom({employee_id, employee_name, date, client, project, job, hours}: {employee_id: string, employee_name: string, date: $sdk.std.core.time, client: string, project: string, job: string, hours: $sdk.std.core.duration}, $g: $sdk.GreyCat = globalThis.greycat.default): TimesheetLine {
      return new TimesheetLine($g.abi.libs_by_name.get(projectlib.name)!.mapped[1], employee_id, employee_name, date, client, project, job, hours);
    }
    static create(employee_id: string, employee_name: string, date: $sdk.std.core.time, client: string, project: string, job: string, hours: $sdk.std.core.duration, $g: $sdk.GreyCat = globalThis.greycat.default): TimesheetLine {
      return new TimesheetLine($g.abi.libs_by_name.get(projectlib.name)!.mapped[1], employee_id, employee_name, date, client, project, job, hours);
    }
  }

}

export namespace model {
  export class Project extends $sdk.GCObject {
    static readonly _type = 'model::Project';

    name: string;
    workpackages: $sdk.std.core.nodeIndex;

    static createFrom({name, workpackages}: {name: string, workpackages: $sdk.std.core.nodeIndex}, $g: $sdk.GreyCat = globalThis.greycat.default): Project {
      return new Project($g.abi.libs_by_name.get(projectlib.name)!.mapped[2], name, workpackages);
    }
    static create(name: string, workpackages: $sdk.std.core.nodeIndex, $g: $sdk.GreyCat = globalThis.greycat.default): Project {
      return new Project($g.abi.libs_by_name.get(projectlib.name)!.mapped[2], name, workpackages);
    }
  }

  export class TimeLog extends $sdk.GCObject {
    static readonly _type = 'model::TimeLog';

    employee: $sdk.std.core.node;
    project: $sdk.std.core.node;
    workpackage: $sdk.std.core.node;
    date: $sdk.std.core.Date;
    amount: $sdk.std.core.duration;

    static createFrom({employee, project, workpackage, date, amount}: {employee: $sdk.std.core.node, project: $sdk.std.core.node, workpackage: $sdk.std.core.node, date: $sdk.std.core.Date, amount: $sdk.std.core.duration}, $g: $sdk.GreyCat = globalThis.greycat.default): TimeLog {
      return new TimeLog($g.abi.libs_by_name.get(projectlib.name)!.mapped[3], employee, project, workpackage, date, amount);
    }
    static create(employee: $sdk.std.core.node, project: $sdk.std.core.node, workpackage: $sdk.std.core.node, date: $sdk.std.core.Date, amount: $sdk.std.core.duration, $g: $sdk.GreyCat = globalThis.greycat.default): TimeLog {
      return new TimeLog($g.abi.libs_by_name.get(projectlib.name)!.mapped[3], employee, project, workpackage, date, amount);
    }
  }

  export class Workpackage extends $sdk.GCObject {
    static readonly _type = 'model::Workpackage';

    name: string;
    project: $sdk.std.core.node;
    time_logs: $sdk.std.core.nodeIndex;

    static createFrom({name, project, time_logs}: {name: string, project: $sdk.std.core.node, time_logs: $sdk.std.core.nodeIndex}, $g: $sdk.GreyCat = globalThis.greycat.default): Workpackage {
      return new Workpackage($g.abi.libs_by_name.get(projectlib.name)!.mapped[4], name, project, time_logs);
    }
    static create(name: string, project: $sdk.std.core.node, time_logs: $sdk.std.core.nodeIndex, $g: $sdk.GreyCat = globalThis.greycat.default): Workpackage {
      return new Workpackage($g.abi.libs_by_name.get(projectlib.name)!.mapped[4], name, project, time_logs);
    }
  }

  export class Employee extends $sdk.GCObject {
    static readonly _type = 'model::Employee';

    id: string;
    name: string;
    gross_remuneration: $sdk.std.core.nodeTime;
    time_logs: $sdk.std.core.nodeTime;

    static createFrom({id, name, gross_remuneration, time_logs}: {id: string, name: string, gross_remuneration: $sdk.std.core.nodeTime, time_logs: $sdk.std.core.nodeTime}, $g: $sdk.GreyCat = globalThis.greycat.default): Employee {
      return new Employee($g.abi.libs_by_name.get(projectlib.name)!.mapped[5], id, name, gross_remuneration, time_logs);
    }
    static create(id: string, name: string, gross_remuneration: $sdk.std.core.nodeTime, time_logs: $sdk.std.core.nodeTime, $g: $sdk.GreyCat = globalThis.greycat.default): Employee {
      return new Employee($g.abi.libs_by_name.get(projectlib.name)!.mapped[5], id, name, gross_remuneration, time_logs);
    }
  }

}

export namespace $anon$ {
}

export const projectlib: $sdk.Library = {
  name: 'project',
  mapped: new globalThis.Array(6),
  configure(loaders, factories) {
    factories.set(data_loaders.DataLoaders._type, data_loaders.DataLoaders);
    factories.set(data_loaders.TimesheetLine._type, data_loaders.TimesheetLine);
    factories.set(model.Project._type, model.Project);
    factories.set(model.TimeLog._type, model.TimeLog);
    factories.set(model.Workpackage._type, model.Workpackage);
    factories.set(model.Employee._type, model.Employee);
  },
  init(abi) {
    this.mapped[0] = abi.type_by_fqn.get(data_loaders.DataLoaders._type);
    this.mapped[1] = abi.type_by_fqn.get(data_loaders.TimesheetLine._type);
    this.mapped[2] = abi.type_by_fqn.get(model.Project._type);
    this.mapped[3] = abi.type_by_fqn.get(model.TimeLog._type);
    this.mapped[4] = abi.type_by_fqn.get(model.Workpackage._type);
    this.mapped[5] = abi.type_by_fqn.get(model.Employee._type);
  },
};
