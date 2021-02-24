import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-life-cycle-test',
  templateUrl: './life-cycle-test.component.html',
  styleUrls: ['./life-cycle-test.component.scss']
})
export class LifeCycleTestComponent implements OnInit, OnChanges, OnDestroy, AfterContentInit, AfterContentChecked, DoCheck, AfterViewInit, AfterViewChecked{


  @Input()
  userName: string | undefined = '';

  @Output()
  lifecycleHookViewChanged = new EventEmitter<boolean>();

  constructor() {
    console.log('constructor');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }
  ngDoCheck(): void {
    console.log('ngDoCheck');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes', changes);
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

}
