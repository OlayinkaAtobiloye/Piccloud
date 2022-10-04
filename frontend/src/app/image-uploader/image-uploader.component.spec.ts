import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageUploaderComponent } from './image-uploader.component';

describe('ImageUploaderComponent', () => {
  let component: ImageUploaderComponent;
  let fixture: ComponentFixture<ImageUploaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageUploaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageUploaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe("updateThumbnail()", () => {
    
    it("should remove the prompt on first call", () => {
      const dropZoneElement: HTMLDivElement = document.createElement("div");
      dropZoneElement.className = "drag-and-drop";
      const prompt: HTMLElement = document.createElement("div");
      prompt.className = "drag-and-drop__prompt";
      dropZoneElement.appendChild(prompt);
      let file = new File([], "test");
      component.updateThumbnail(dropZoneElement, file);
      expect(dropZoneElement.children.length).toBe(1);
      const element: HTMLElement = dropZoneElement.children.item(0) as HTMLElement;
      expect(dropZoneElement.children.item(0)?.className).toBe("drag-and-drop__thumb");
      expect(element?.dataset["label"]).toBe("test");
    })


  })
});
