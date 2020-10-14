function main() {
    var canvas = document.getElementById("myCanvas");
    var gl = canvas.getContext("webgl");

    //adalah .c
    var vertexShaderSource = `
        void main() {
        gl_PointSize = 30.0;
        gl_Position = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `;
    var fragmentShaderSource = `
        void main() {
        gl_FragColor = vec4(1.0, 1.0, 0.0, 1.0);
        }
    `;

    //adalah .o
    var vertexShader = gl.createShader(gl.VERTEX_SHADER);
    var fragmentShader =gl.createShader(gl.FRAGMENT_SHADER);

    //mengetikkan source code text ke .c
    gl.shaderSource(vertexShader, vertexShaderSource);
    gl.shaderSource(fragmentShader, fragmentShaderSource);

    //mengompilasi .c menjadi .o
    gl.compileShader(vertexShader);
    gl.compileShader(fragmentShader);

    //membuat penampung .exe
    var shaderProgram = gl.createProgram();

    //memasukan adonan objek ke penampung .exe
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);

    //menggabungkan adonan di dalam penampung
    gl.linkProgram(shaderProgram);

    //mulai menggunakan "cat" .exe ke dalam konteks penggambaran
    gl.useProgram(shaderProgram);

    gl.clearColor(0.20, 0.25, 0.5, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);

    gl.drawArrays(gl.POINTS, 0, 1);
}