//https://bag-of-tricks.github.io/modules/math.html

import { addNumbers, clamp, getMean } from "@baggie/math";
import { NonEmptyArray } from "_@baggie_typescript@0.1.7-alpha.1@@baggie/typescript";

export class MathTools{
    constructor(){}

    //将一个数字数组加和
    public static Sum(numbers: NonEmptyArray<number>):number{
        try{
            return addNumbers(numbers);
        }catch(error){
            return -1;
        }
    }

    //获取平均值
    public static GetAverage(numbers:NonEmptyArray<number>):number{
        try{
            return getMean(numbers);
        }catch(error){
            return -1;
        }
    }

    public static Sqrt(x:number):number{
        return Math.sqrt(x);
    }

    public static Clamp(value:number,minv:number,maxv:number){
        return clamp(value,minv,maxv);
    }

    public static Absf(value:number):number{
        return Math.abs(value);
    }
}