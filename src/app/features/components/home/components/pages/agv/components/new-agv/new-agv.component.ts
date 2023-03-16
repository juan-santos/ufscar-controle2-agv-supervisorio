import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { take } from 'rxjs';
import { AGV } from 'src/app/features/interfaces/agv.interface';
import { AgvService } from 'src/app/features/services/agv/agv.service';

@Component({
    selector: 'app-new-agv',
    templateUrl: './new-agv.component.html',
    styleUrls: ['./new-agv.component.scss'],
})
export class NewAgvComponent implements OnInit {

    public title: string = '';
    public isNew = true;

    public formCliente: FormGroup = this.formBuilder.group({
        name: [null, [Validators.required, Validators.minLength(5)]],
        ip: [null, [Validators.required, Validators.minLength(9)]],
    });

    constructor(
        private readonly formBuilder: FormBuilder,
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private agvService: AgvService,
    ) {}

    /**
     * Método ngOnInit
     */
    public ngOnInit(): void {
        this.activatedRoute.queryParams.pipe(take(1)).subscribe((data) => {
          const agv = data as AGV;

            if (agv && agv.id) {
                this.title = 'Alteração de AGV';
                this.formCliente.controls['name'].setValue(agv.name);
                this.formCliente.controls['ip'].setValue(agv.ip);
                this.isNew = false;
            } else {
              this.title = 'Cadastro de AGVs';
            }

        });
    }

    public save(): void {
      this.agvService.saveAGV(this.formCliente.value).pipe(take(1)).subscribe(()=>{
        const navigationExtras: NavigationExtras = {
          queryParams: {
            text: 'AGV alterado com sucesso'
          }
        };
        this.router.navigate(['/home/agv/management'], navigationExtras)
      })
    }

    public newAGV(): void {
      this.agvService.createAGV(this.formCliente.value).pipe(take(1)).subscribe(()=>{
        const navigationExtras: NavigationExtras = {
          queryParams: {
            text: 'AGV cadastrado com sucesso'
          }
        };
        this.router.navigate(['/home/agv/management'], navigationExtras)
      })
    }
}
