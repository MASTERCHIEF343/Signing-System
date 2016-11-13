import { Directive, ElementRef, Renderer, HostListener } from '@angular/core';

@Directive({
	selector: '[user-menu]'
})

export class userMenuDirective{
	constructor(
		private el: ElementRef,
		private renderer: Renderer
	){}

	@HostListener('mouseenter') onMouseEnter() {
		this.MenuAnimation(true);
	}
	@HostListener('mouseleave') onMouseLeave() {
		this.MenuAnimation(false);
	}
	private MenuAnimation(ani: boolean) {
		if(ani == true){
			this.renderer.setElementStyle(this.el.nativeElement.querySelector('#menu'), 'display', 'block');
		}else{
			this.renderer.setElementStyle(this.el.nativeElement.querySelector('#menu'), 'display', 'none');
		}
	}
	
}