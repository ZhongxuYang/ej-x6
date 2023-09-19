import { Graph } from "@antv/x6"
import { Button } from "@antv/x6/es/registry/tool/button"
import { FunctionExt, Cell, CellView } from "@antv/x6"

export class MyButton extends Button {
  onMouseOver(e: any) {
    if (this.guard(e)) {
      return;
    }
    e.stopPropagation();
    e.preventDefault();
    const onMouseOver = (this.options as MyOptions).onMouseOver;
    if (typeof onMouseOver === "function") {
      FunctionExt.call(onMouseOver, this.cellView, {
        e,
        view: this.cellView,
        cell: this.cellView.cell,
        btn: this
      });
    }
  }
}

MyButton.config<MyOptions>({
  events: {
    mouseover: "onMouseOver",
    mouseout: "onMouseOut"
  }
});
export interface MyOptions extends Button.Options {
  onMouseOver?: (
    this: CellView,
    args: {
      e: any;
      cell: Cell;
      view: CellView;
      btn: MyButton;
    }
  ) => any;
  onMouseOut?: (
    this: CellView,
    args: {
      e: any;
      cell: Cell;
      view: CellView;
      btn: MyButton;
    }
  ) => any;
}
Graph.registerNodeTool("my-btn", MyButton, true)
