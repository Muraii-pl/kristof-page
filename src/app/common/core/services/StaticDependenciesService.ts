import { Injectable, Injector } from '@angular/core';
import { ModalService } from './ModalService';

@Injectable()
export class StaticDependenciesService {

  private static _injector: Injector;
  // private static _modalService: ModalService;

  constructor(
    private readonly _injector: Injector,
    // private readonly _modalService: ModalService
  ) {
    StaticDependenciesService._injector = _injector;
    // StaticDependenciesService._modalService = _modalService;
  }


  public static get injector(): Injector {
    return StaticDependenciesService.getService<Injector>(StaticDependenciesService._injector);
  }

  // public static get modalService(): ModalService {
  //
  //   if (!StaticDependenciesService._modalService) {
  //     throw new Error('ModalService is not initialized.')
  //   }
  //
  //   return StaticDependenciesService._modalService;
  // }

  private static getService<T>(service: T): T {
    if (!service) {
      throw new Error('StaticDependenciesService in not initialized.')
    }

    return service
  }

}
