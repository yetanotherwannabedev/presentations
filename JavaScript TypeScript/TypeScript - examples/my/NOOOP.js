function assertNever(obj) {
    throw new Error('Unexpected object type');
}
function getArea(shape) {
    switch (shape.kind) {
        case ('circle'):
            return Math.PI * Math.pow(shape.radius, 2);
        case ('rectangle'):
            return shape.h * shape.w;
    }
    shape;
    assertNever(shape);
}
var shape1 = { kind: 'circle', radius: 4 };
var area1 = getArea(shape1);
var shape2 = { kind: 'rectangle', w: 4, h: 1 };
var area2 = getArea(shape2);
