import { IsString, IsNumber, IsOptional, IsEmpty, IsBoolean } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RoomInfoDto {
    @IsNumber()
    @IsEmpty()
    @ApiProperty({
        example: 1,
        required: true,
        description: '방 생성시 서버에서 자동 생성하는 방의 고유번호',
    })
    readonly roomId: number;

    @IsString()
    @IsEmpty()
    @ApiProperty({
        example: '같이 가치마인드 하실 초보 모집합니다!!',
        required: true,
        description: '게임방 제목, 유저가 입력하지 않으면, 서버에서 랜덤 방제로 자동생성',
    })
    readonly roomTitle: string;

    @IsNumber()
    @IsEmpty()
    @ApiProperty({
        example: 6,
        required: true,
        description: '게임 정원',
    })
    readonly maxCount: number;

    @IsNumber()
    @IsEmpty()
    @ApiProperty({
        example: 3,
        required: true,
        description:
            '방정보 db에는 participants가 참여자 닉네임 배열로 되어 있고, client에 전단할때는 해당 배열의 length를 전달',
    })
    readonly participants: number;

    @IsBoolean()
    @IsEmpty()
    @ApiProperty({
        example: true,
        required: true,
        description: '비밀방 여부',
    })
    readonly IsSecreteRoom: boolean;
}
