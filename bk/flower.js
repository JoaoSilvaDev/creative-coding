class Flower
{
    constructor()
    {
        let x = random(0, width);
        let y = random(-100, -10);
        this.pos = createVector(x, y);
        this.vel = createVector(gravity.x, gravity.y * 100);
        this.acc = createVector();
        this.size = random(5, 40);
        this.angle = random(TWO_PI);
        this.dir = (random(1) > 0.5) ? 1 : -1;
    }

    applyForce(force)
    {
        this.acc.add(force);
    }

    update()
    {
        this.force = gravity.copy();
        this.force
        this.acc = gravity;
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.img = img;

        if(p5.Vector.dist(mousePos, this.pos) < avoidRange)
        {
            let dir = createVector(this.pos.x - mousePos.x, this.pos.y - mousePos.y);
            dir.normalize();
            dir.mult(avoidStrength);

            this.vel.add(dir);
        }

        if(this.pos.y < -120 || this.pos.y > height || this.pos.x > width || this.pos.x < 0)
            this.reset();

        // if(this.pos.x < 0-this.size)
        //     this.pos.x = width;
        // else if(this.pos.x > width+this.size)
        //     this.pos.x = 0;
    }

    reset()
    {
        this.pos.x = random(0, width)
        this.pos.y = -100;
        this.vel = createVector(gravity.x, gravity.y * 10);
        this.acc = createVector();
    }

    draw()
    {
        push();
        translate(this.pos.x, this.pos.y);
        rotate(this.angle);
        imageMode(CENTER);
        image(img, 0, 0, this.size, this.size);
        pop();

        this.angle += this.vel.mag() * this.dir / 200;
    }
}